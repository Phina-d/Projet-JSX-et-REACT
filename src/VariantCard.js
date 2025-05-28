import React, { useState } from "react";

const VariantCard = ({ variant }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div
      style={{
        width: "300px",
        margin: "1rem",
        borderRadius: "20px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
        padding: "1rem",
        backgroundColor: "#fff",
        transition: "transform 0.3s",
        textAlign: "center",
      }}
    >
      <img
        src={variant.image}
        alt={variant.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "12px",
          marginBottom: "1rem",
          transition: "0.3s",
        }}
      />
      <h3 style={{ fontSize: "20px", marginBottom: "0.5rem" }}>{variant.name}</h3>
      <p style={{ fontWeight: "bold" }}>{variant.price}</p>
      {showMore && (
        <div style={{ marginTop: "0.5rem", color: "#333", fontSize: "14px" }}>
          <p><strong>Mode :</strong> {variant.mode}</p>
          <p>{variant.description}</p>
        </div>
      )}
      <button
        onClick={toggleShowMore}
        style={{
          padding: "0.4rem 1rem",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#00d8ff",
          color: "#000",
          cursor: "pointer",
          marginTop: "1rem",
        }}
      >
        {showMore ? "Voir moins" : "Voir plus"}
      </button>
    </div>
  );
};

export default VariantCard;
