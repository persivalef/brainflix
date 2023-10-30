import '../Video/Video.scss'

function Video({video}) {
    return (
        <section className="video">
        <video className="video__displayed" controls poster={video && video.image}></video>
        </section>
    );
}
export default Video;