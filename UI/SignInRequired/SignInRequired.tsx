import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { loginActions } from "../../store/login-slice";
import { signInWithGoogle } from "../../utils/firebaseauth.utils";
import styles from "./SignInRequired.module.scss";

const SignInRequired: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  return (
    <>
      <h3>Please Sign In to view this page</h3>
      <div className={styles.buttons}>
        <button onClick={() => router.replace("/")}>Home page</button>
        <button
          onClick={() => {
            dispatch(loginActions.setLoggingIn(true));
            dispatch(loginActions.setLoginClicked(true));
            signInWithGoogle();
          }}
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default SignInRequired;
