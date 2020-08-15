import React, { useCallback } from 'react';

import { FiHeart } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container } from './styles';

import Input from '../../../components/Input';
import api from '../../../services/api';

export interface ModalProps {
  isVisible: boolean;
  toogleModal(): void;
}

const NewCategoryModal: React.FC<ModalProps> = ({ isVisible, toogleModal }) => {
  const handleSubmit = useCallback(
    async (data: { category: string }) => {
      try {
        await api.post('/admin/preferences', {
          category: data.category,
        });
        alert('Categoria criada com sucesso');
        // eslint-disable-next-line no-restricted-globals
        location.reload();
        toogleModal();
      } catch (error) {
        alert('Não foi possível criar esta categoria');
      }
    },
    [toogleModal],
  );

  return (
    <Container isVisible={isVisible}>
      <main>
        <header>
          <FiHeart size={24} color="#65c4b0" />
          <h2>Adicione aqui um nova categoria</h2>
        </header>
        <Form onSubmit={handleSubmit}>
          <div>
            <Input name="category" type="text" placeholder="Nova categoria" />
          </div>
          <button type="submit">Adicionar</button>
        </Form>

        <button type="button" onClick={toogleModal}>
          Cancelar
        </button>
      </main>
    </Container>
  );
};

export default NewCategoryModal;
