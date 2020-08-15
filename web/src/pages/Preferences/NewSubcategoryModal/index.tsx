import React, { useCallback, FormEvent, useState } from 'react';

import { FiHeart } from 'react-icons/fi';
import { Container } from './styles';

import { SelectedPreference } from '../index';
import api from '../../../services/api';

export interface ModalProps {
  isVisible: boolean;
  toogleModal(): void;
  selectedCategory: SelectedPreference;
}

const NewSubcategoryModal: React.FC<ModalProps> = ({
  isVisible,
  toogleModal,
  selectedCategory,
}) => {
  const [subcategries, setSubcategies] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        const finalSubcategories = subcategries
          .split(',')
          .map(subcategry => subcategry.trim());

        await api.post(
          `/admin/preferences/${selectedCategory._id}/subcategories`,
          {
            subcategories: finalSubcategories,
          },
        );

        alert('Subcategoria adicionada com sucesso');
        // eslint-disable-next-line no-restricted-globals
        location.reload();
        toogleModal();
      } catch (error) {
        alert('Não foi possível adicionar esta subcategoria');
      }
    },
    [selectedCategory._id, subcategries, toogleModal],
  );

  return (
    <Container isVisible={isVisible}>
      <main>
        <h1>{selectedCategory.category}</h1>
        <header>
          <h2>Adicione novas subcategorias separadas por vírgulas</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={subcategries}
              onChange={e => setSubcategies(e.target.value)}
              type="text"
              placeholder="Subcategoria 1, Subcategoria 2"
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>

        <button type="button" onClick={toogleModal}>
          Cancelar
        </button>
      </main>
    </Container>
  );
};

export default NewSubcategoryModal;
