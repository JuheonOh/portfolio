export default function YouTubePlayer({ url }) {
  const getEmbedUrl = (videoUrl) => {
    let embedUrl = "";
    if (!videoUrl) return "";
    
    if (videoUrl.includes("youtu.be")) {
      const id = videoUrl.split("youtu.be/")[1];
      embedUrl = `https://www.youtube.com/embed/${id}`;
    } else if (videoUrl.includes("watch?v=")) {
      const id = videoUrl.split("v=")[1].split("&")[0];
      embedUrl = `https://www.youtube.com/embed/${id}`;
    } else {
      embedUrl = videoUrl;
    }
    return embedUrl;
  };

  return (
    <div className="aspect-video w-full">
      <iframe
        src={`${getEmbedUrl(url)}?autoplay=1`}
        title="YouTube video player"
        className="h-full w-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}