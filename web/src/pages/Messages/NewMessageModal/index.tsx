import React, { useCallback, FormEvent, useState, useMemo } from 'react';

import { FiHeart, FiCamera } from 'react-icons/fi';
import { Container } from './styles';

import { ModalProps } from '../../Preferences/NewCategoryModal';
import api from '../../../services/api';

const NewMessageModal: React.FC<ModalProps> = ({ isVisible, toogleModal }) => {
  const options = [
    {
      label: 'Dia dos pais',
    },
    {
      label: 'Dia das mães',
    },
    {
      label: 'Dia do amigo',
    },
    {
      label: 'Dia dos namorados',
    },
    {
      label: 'Natal',
    },
    {
      label: 'Aniversário',
    },
    {
      label: 'Aniversário de namoro',
    },
    {
      label: 'Aniversário de casamento',
    },
  ];

  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [message_type, setMessageType] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleAddNewMessage = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const data = new FormData();

        if (thumbnail) {
          data.append('message_content', thumbnail);
          data.append('message_type', message_type);
        }

        await api.post('/admin/messages', data);

        alert('Messagem criada com sucesso');
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      } catch (err) {
        console.log(err);

        alert('Não foi possível adicionar esta mensagem');
      }

      setThumbnail(null);
      setMessageType('');
    },
    [message_type, thumbnail],
  );

  return (
    <Container isVisible={isVisible}>
      <main>
        <form onSubmit={handleAddNewMessage}>
          <label
            id="thumbnail"
            htmlFor="thumbnailInput"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumb' : ''}
          >
            <input
              type="file"
              id="thumbnailInput"
              onChange={e => {
                if (e.target.files) {
                  setThumbnail(e.target.files[0]);
                }
              }}
            />
            {!thumbnail && <FiCamera size={24} color="#333" />}
          </label>
          <div>
            <select
              name="category"
              value={message_type}
              onChange={e => setMessageType(e.target.value)}
            >
              <option value="" disabled>
                Selecione uma opção
              </option>
              {options.map(option => (
                <option value={option.label}>{option.label}</option>
              ))}
            </select>
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

export default NewMessageModal;
