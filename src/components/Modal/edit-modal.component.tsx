import { useState } from 'react';
import { GrClose } from 'react-icons/gr';

import { Michi } from '../../api/michisAPI';

interface EditMichiModalProps {
  setShowModal: (show: boolean) => void;
  selectedMichi: Michi;
  handleEditMichi: (michi: Michi) => void;
}

const EditMichiModal = ({ setShowModal, selectedMichi, handleEditMichi }: EditMichiModalProps) => {
  const [michi, setMichi] = useState<Michi>(selectedMichi);
  console.log(selectedMichi);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Edit Michi</h3>
              <GrClose
                className="p-1 text-black opacity-50 text-3xl font-semibold cursor-pointer"
                onClick={() => setShowModal(false)}
              />
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <form>
                <div className="form-container">
                  <label className="form-label">Name</label>
                  <input
                    className="form-input"
                    placeholder="Name"
                    required
                    value={michi.name}
                    onChange={(e) => {
                      setMichi({ ...michi, name: e.target.value });
                    }}
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
                <div className="form-container">
                  <label className="form-label">Race</label>
                  <input
                    className="form-input"
                    placeholder="Race"
                    value={michi.race}
                    onChange={(e) => {
                      setMichi({ ...michi, race: e.target.value });
                    }}
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
                <div className="form-container">
                  <label className="form-label">Age</label>
                  <input
                    type={'number'}
                    className="form-input"
                    placeholder="Age"
                    value={michi.age}
                    onChange={(e) => {
                      setMichi({ ...michi, age: parseInt(e.target.value) });
                    }}
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
                <div className="form-container">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-input"
                    placeholder="Description"
                    value={michi.description}
                    onChange={(e) => {
                      setMichi({ ...michi, description: e.target.value });
                    }}
                    style={{ transition: 'all .15s ease' }}
                  />
                </div>
              </form>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => handleEditMichi(michi)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default EditMichiModal;
