import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  
  const user = useSelector((store) => store.user);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
    // onAuthStateChanged is kind of like a event listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        // adding user to store
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe;
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-48"
        src={LOGO_URL}
        alt="logo"
      />
      {user && (<div className="flex p-4">
        <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
        <button onClick={handleSignOut} className="font-bold text-white">
          {user?.displayName}(Sign Out)
        </button>
      </div>)}
    </div>
  );
};

export default Header;
