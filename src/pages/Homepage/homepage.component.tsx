import { useEffect, useState } from 'react';
import { Michi, michisAPI } from '../../api/michisAPI';
import Loading from '../../components/Loading/loading.component';
import MichiCard from '../../components/MichiCard/michi-card';
import EditMichiModal from '../../components/Modal/edit-modal.component';

const Homepage = () => {
  const [michis, setMichis] = useState<Michi[]>([]);
  const [selectedMichi, setSelectedMichi] = useState<Michi | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      michisAPI
        .getMichis()
        .then((data) => {
          console.log('data', data);
          setMichis(data.michis);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    })();
  }, []);

  const handleDelete = async (id: string) => {
    await michisAPI.deleteMichi(id).then(() => {
      setMichis(michis.filter((michi) => michi._id !== id));
    });
  };

  const handleSelectMichi = (michi: Michi) => {
    setSelectedMichi(michi);
    setShowModal(true);
  };

  const handleEditMichi = async (michi: Michi) => {
    setShowModal(false);
    await michisAPI.editMichi(michi).then(() => {
      setMichis(michis.map((m) => (m._id === michi._id ? michi : m)));
    });
  };

  return (
    <div className="flex flex-row justify-center my-8">
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-10 flex flex-row flex-wrap gap-8 justify-center">
          {michis.map((michi) => (
            <MichiCard
              key={michi._id}
              michi={michi}
              handleDelete={handleDelete}
              handleSelectMichi={handleSelectMichi}
            />
          ))}
          {showModal && selectedMichi && (
            <EditMichiModal
              selectedMichi={selectedMichi}
              handleEditMichi={handleEditMichi}
              setShowModal={setShowModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Homepage;
