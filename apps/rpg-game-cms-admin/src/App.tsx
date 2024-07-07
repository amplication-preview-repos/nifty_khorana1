import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NewsList } from "./news/NewsList";
import { NewsCreate } from "./news/NewsCreate";
import { NewsEdit } from "./news/NewsEdit";
import { NewsShow } from "./news/NewsShow";
import { TutorialList } from "./tutorial/TutorialList";
import { TutorialCreate } from "./tutorial/TutorialCreate";
import { TutorialEdit } from "./tutorial/TutorialEdit";
import { TutorialShow } from "./tutorial/TutorialShow";
import { VideoList } from "./video/VideoList";
import { VideoCreate } from "./video/VideoCreate";
import { VideoEdit } from "./video/VideoEdit";
import { VideoShow } from "./video/VideoShow";
import { PageList } from "./page/PageList";
import { PageCreate } from "./page/PageCreate";
import { PageEdit } from "./page/PageEdit";
import { PageShow } from "./page/PageShow";
import { TextBlockList } from "./textBlock/TextBlockList";
import { TextBlockCreate } from "./textBlock/TextBlockCreate";
import { TextBlockEdit } from "./textBlock/TextBlockEdit";
import { TextBlockShow } from "./textBlock/TextBlockShow";
import { VideoBlockList } from "./videoBlock/VideoBlockList";
import { VideoBlockCreate } from "./videoBlock/VideoBlockCreate";
import { VideoBlockEdit } from "./videoBlock/VideoBlockEdit";
import { VideoBlockShow } from "./videoBlock/VideoBlockShow";
import { ImageBlockList } from "./imageBlock/ImageBlockList";
import { ImageBlockCreate } from "./imageBlock/ImageBlockCreate";
import { ImageBlockEdit } from "./imageBlock/ImageBlockEdit";
import { ImageBlockShow } from "./imageBlock/ImageBlockShow";
import { AboutList } from "./about/AboutList";
import { AboutCreate } from "./about/AboutCreate";
import { AboutEdit } from "./about/AboutEdit";
import { AboutShow } from "./about/AboutShow";
import { DownloadsList } from "./downloads/DownloadsList";
import { DownloadsCreate } from "./downloads/DownloadsCreate";
import { DownloadsEdit } from "./downloads/DownloadsEdit";
import { DownloadsShow } from "./downloads/DownloadsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"RPGGameCMS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="News"
          list={NewsList}
          edit={NewsEdit}
          create={NewsCreate}
          show={NewsShow}
        />
        <Resource
          name="Tutorial"
          list={TutorialList}
          edit={TutorialEdit}
          create={TutorialCreate}
          show={TutorialShow}
        />
        <Resource
          name="Video"
          list={VideoList}
          edit={VideoEdit}
          create={VideoCreate}
          show={VideoShow}
        />
        <Resource
          name="Page"
          list={PageList}
          edit={PageEdit}
          create={PageCreate}
          show={PageShow}
        />
        <Resource
          name="TextBlock"
          list={TextBlockList}
          edit={TextBlockEdit}
          create={TextBlockCreate}
          show={TextBlockShow}
        />
        <Resource
          name="VideoBlock"
          list={VideoBlockList}
          edit={VideoBlockEdit}
          create={VideoBlockCreate}
          show={VideoBlockShow}
        />
        <Resource
          name="ImageBlock"
          list={ImageBlockList}
          edit={ImageBlockEdit}
          create={ImageBlockCreate}
          show={ImageBlockShow}
        />
        <Resource
          name="About"
          list={AboutList}
          edit={AboutEdit}
          create={AboutCreate}
          show={AboutShow}
        />
        <Resource
          name="Downloads"
          list={DownloadsList}
          edit={DownloadsEdit}
          create={DownloadsCreate}
          show={DownloadsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
