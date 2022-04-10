const ImageGallery = () => {
  return (
    <section className="w-100" id="image-gallery">
      <div
        className="carousel slide carousel-fade h-100"
        data-ride="carousel"
        id="image-carousel"
      >
        <ol className="carousel-indicators">
          {/* individual indicators programatically appended in index.js */}
        </ol>
        <div className="carousel-inner">
          {/* individual items of gallery programatically appended in index.js */}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
