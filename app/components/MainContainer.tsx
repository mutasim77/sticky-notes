import Head from "next/head";
import SideBar from "./UI/SideBar";
import '../../app/globals.css';

interface ContainerProps {
    keywords: string,
    title: string,
    children: React.ReactNode
}

const MainContainer: React.FC<ContainerProps> = ({ children, keywords, title }) => {
    return (
        <>
            <Head>
                <meta key={'nextjs, nextjs13, noteapp' + keywords}></meta>
                <title>{`Sticky Notes | ${title}`}</title>
            </Head>
            <main>
                <SideBar />
                {children}
            </main>
        </>
    );
};

export default MainContainer;
