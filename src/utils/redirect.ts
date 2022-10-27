import { GetServerSideProps } from "next";
import { CookieKeys } from "./cookies";

export const redirectIfNotAuth: (
    destination: string
) => GetServerSideProps = destination => {
    const getServerSideProps: GetServerSideProps = async ({ req }) => {
        const firebaseToken = req.cookies[CookieKeys.FIREBASE_TOKEN];
        const isAuth = !!firebaseToken;

        const goToPage = { props: {} };
        const redirect = {
            props: {},
            redirect: {
                destination,
            },
        };
        try {
            // XXX This keeps giving me no kid claim shit
            // const auth = getAuth(app);
            // const isAuth = await auth.verifyIdToken(firebaseToken as string);

            return isAuth ? goToPage : redirect;
        } catch (error) {
            console.error(error);

            return redirect;
        }
    };

    return getServerSideProps;
};
