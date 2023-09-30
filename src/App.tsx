import { Gallery } from "./Gallery";

function App() {
    return (
        <div className="App">
            <Gallery
                photos={[
                    {
                        id: 1,
                        src: "/photos/1.jpg",
                        preview: "/photos/preview/1.jpg",
                        description: "Baltic Sea 1",
                    },
                    {
                        id: 2,
                        src: "/photos/2.jpg",
                        preview: "/photos/preview/2.jpg",
                        description: "Baltic Sea 2",
                    },
                    {
                        id: 3,
                        src: "/photos/3.jpg",
                        preview: "/photos/preview/3.jpg",
                        description: "Baltic Sea 3",
                    },
                    {
                        id: 4,
                        src: "/photos/4.jpg",
                        preview: "/photos/preview/4.jpg",
                        description: "Baltic Sea 4",
                    },
                    {
                        id: 5,
                        src: "/photos/5.jpg",
                        preview: "/photos/preview/5.jpg",
                        description: "Baltic Sea 5",
                    },
                    {
                        id: 6,
                        src: "/photos/6.jpg",
                        preview: "/photos/preview/6.jpg",
                        description: "Baltic Sea 6"
                    },
                    {
                        id: 7,
                        src: "/photos/7.jpg",
                        preview: "/photos/preview/7.jpg",
                        description: "Baltic Sea 7"
                    }
                ]}
            />
        </div>
    );
}

export default App
