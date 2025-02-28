import React, { useState, useEffect, useRef } from "react";
import "../../styles/pages/Gallery/Visitorgallery.scss";
import visitorImage1 from "../../assets/img/Gallery/CJSpot.jpeg";
import visitorImage2 from "../../assets/img/Gallery/giant-slide.png";
import visitorImage3 from "../../assets/img/Gallery/Heidelberg.jpg";
import visitorImage4 from "../../assets/img/Gallery/lagoon.png";
const Visitorgallery = () => {
  const [images, setImages] = useState(() => {
    const savedImages = sessionStorage.getItem("visitorImages");
    return savedImages
      ? JSON.parse(savedImages)
      : [visitorImage1, visitorImage2, visitorImage3, visitorImage4];
  });

  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [newImage, setNewImage] = useState("");
  const fileInputRef = useRef(null); // Ref for the file input

  useEffect(() => {
    sessionStorage.setItem("visitorImages", JSON.stringify(images));
  }, [images]);

  const handleImageUpload = (event) => {
    event.preventDefault();
    if (newImage) {
      setImages([...images, newImage]);
      setNewImage("");
      setShowUploadPopup(false); // Close the popup after adding
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
        setShowUploadPopup(false); // Close popup
      };
      reader.readAsDataURL(file);
    }
  };

  const openFileUpload = () => {
    fileInputRef.current.click(); // Programmatically click the hidden file input
  };

  return (
    <>
      <div className="Visitorgallery">
        <div className="redBlock">
          <h2>Visitors Gallery</h2>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image} alt={`Gallery Item ${index + 1}`} />
            </div>
          ))}

          {/* Add Image Placeholder - Now at the END */}
          <div
            className="gallery-item add-image-item"
            onClick={() => setShowUploadPopup(true)}
          >
            <i class="bx bx-plus-circle"></i>
          </div>
        </div>

        {/* Upload Popup */}
        {showUploadPopup && (
          <div className="upload-popup-overlay">
            <div className="upload-popup">
              <button
                className="close-button"
                onClick={() => setShowUploadPopup(false)}
              >
                × {/* X symbol */}
              </button>
              <h3>Add Image</h3>
              <form onSubmit={handleImageUpload}>
                {/* File Input (hidden) */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  style={{ display: "none" }} // Hide the file input
                />
                {/* Button to trigger file input */}
                <button
                  type="button"
                  onClick={openFileUpload}
                  className="upload-button"
                >
                  From Computer
                </button>

                {/* URL Input */}
                <input
                  type="text"
                  placeholder="Or paste image URL here..."
                  value={newImage}
                  onChange={(e) => setNewImage(e.target.value)}
                />
                <button type="submit">
                  <i class="bx bx-cloud-upload"></i>Upload
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Visitorgallery;
