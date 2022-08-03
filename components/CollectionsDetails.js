import React from "react";

function CollectionsDetails({ collection }) {
  console.log("collection", collection);
  return (
    <div>
      <h1>Collections Details</h1>
      {collection.map((item) => {
        return (
          <div key={item.node.id}>
            <h1>{item.node.handle}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default CollectionsDetails;
