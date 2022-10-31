import { getDatabase, ref, onValue } from "firebase/database";

const Read = () => {
  const db = getDatabase();
  const starCountRef = ref(db, "inicioRapido");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    //console.log(data);
    return data
  });
};

export default Read;
