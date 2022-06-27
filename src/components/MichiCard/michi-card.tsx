import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Michi } from '../../api/michisAPI';
import { useAuthContext } from '../../context/auth.context';

interface MichiCardProps {
  michi: Michi;
  handleDelete: (id: string) => void;
}

const MichiCard = ({ michi, handleDelete }: MichiCardProps) => {
  const { token } = useAuthContext();

  return (
    <div className="michi-card">
      <div className="overflow-hidden h-3/5">
        <img className="object-cover" src={michi.imgUrl} alt={michi.name} />
      </div>
      <div className="px-4">
        <div className="flex">
          <p className="font-bold pr-2">Name: </p>
          <p>{michi.name}</p>
        </div>
        <div className="flex">
          <p className="font-bold pr-2 ">Description: </p>
          <p>{michi.description}</p>
        </div>
        {token ? (
          <div className="flex flex-row justify-between my-3">
            <FaTrash
              className="cursor-pointer hover:text-red-400"
              onClick={() => {
                console.log(michi);
                handleDelete(michi._id);
              }}
            />
            <FaPencilAlt className="cursor-pointer hover:text-green-500" />
          </div>
        ) : (
          <div className="text-gray-500 text-center my-3 font-bold">
            <small>Login to edit and create Michis</small>
          </div>
        )}
      </div>
    </div>
  );
};
export default MichiCard;
