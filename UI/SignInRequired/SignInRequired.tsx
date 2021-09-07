import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { loginActions } from "../../store/login-slice";
import { signInWithGoogle } from "../../utils/firebase.utils";
import styles from "./SignInRequired.module.scss";

const SignInRequired: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLoggingIn } = useSelector((state: RootState) => state.login);
  return isLoggingIn ? (
    <h3>Signing In...</h3>
  ) : (
    <>
      <h3>Please Sign In to view this page</h3>
      <div className={styles.buttons}>
        <button onClick={() => router.replace("/")}>Home page</button>
        <button
          onClick={() => {
            dispatch(loginActions.setLoggingIn(true));
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
