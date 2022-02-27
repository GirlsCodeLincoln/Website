const Podcast = () => {
  return (
    <section id="podcast" className="col-12 justify-content-center py-5 bg-grey">
      <div className="text-center col-lg-7 col-xs-8 mx-auto mb-3">
        <h2 className="font-weight-bold">
          Check out our{" "}
          <a
            href="https://www.buzzsprout.com/1882218"
            target="_blank"
            rel="noopener noreferrer"
          >
            Podcast
          </a>
          !
        </h2>
        <i>
          Hosts Elsbeth Magilton and Aakriti Agrawal profile a historical woman
          in coding each month and introduce listeners to a coder in or from
          Nebraska.
        </i>
        <iframe
          id="player_iframe"
          src="https://www.buzzsprout.com/1882218?client_source=large_player&iframe=true&referrer=https%3A%2F%2Fwww.buzzsprout.com%2F1882218%2Fpodcast%2Fembed"
          loading="lazy"
          width="100%"
          height="375"
          frameBorder="0"
          scrolling="no"
          title="The Girls Code Lincoln Podcast"
        />
      </div>
    </section>
  );
};

export default Podcast;
