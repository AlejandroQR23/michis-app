import { useEffect, useState } from 'react';
import { Michi, michisAPI } from '../../api/michisAPI';
import Loading from '../../components/Loading/loading.component';
import MichiCard from '../../components/MichiCard/michi-card';

const Homepage = () => {
  const [michis, setMichis] = useState<Michi[]>([]);
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
          console.log('michis', michis);
        });
    })();
  }, []);

  const handleDelete = async (id: string) => {
    await michisAPI.deleteMichi(id).then(() => {
      setMichis(michis.filter((michi) => michi._id !== id));
    });
  };

  return (
    <div className="flex flex-row justify-center my-8">
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-10 flex flex-row flex-wrap gap-8 justify-center">
          {michis.map((michi) => (
            <MichiCard key={michi._id} michi={michi} handleDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
