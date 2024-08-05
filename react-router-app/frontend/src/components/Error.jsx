import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";
import MainNavigation from "./MainNavigation";

export default function Error(){
    const error = useRouteError();

    let title = "An error occured!";
    let msg = "Something went wrong!"

    if (error.status === 500){
        msg = error.data.message;
    }

    if (error.status === 404){
        title = "Not Found";
        msg = "Could not find resource."
    }

    return(
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{msg}</p>
            </PageContent>
        </>
    );
}