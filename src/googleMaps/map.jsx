import React from "react";

import "../googleMaps/map.css";

function map() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.0354956827395!2d28.936192614153356!3d41.013690810968654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba30ce15cf8d%3A0x8f65699445805681!2s%C5%9Eehremini%20Anadolu%20Lisesi!5e0!3m2!1str!2str!4v1768993635699!5m2!1str!2str"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default map;