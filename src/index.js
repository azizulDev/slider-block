import { InnerBlocks } from "@wordpress/block-editor"
import { registerBlockType } from "@wordpress/blocks"

// SCSS file import
import "./index.scss";

// Registering a block
registerBlockType("myplugins/slider-block-raju", {
    title: "Slider Block Raju",
    supports: {
      align: ["full"]
    },
    attributes: {
      align: { type: "string", default: "full" }
    },
    edit: EditComponent,
    save: SaveComponent
  })
  
  function SaveComponent() {
    return <InnerBlocks.Content />
  }
  
  function EditComponent() {
    return (
      <div style={{ backgroundColor: "#333", padding: "35px" }}>
        <p style={{ textAlign: "center", fontSize: "20px", color: "#FFF" }}>Slideshow</p>
        <InnerBlocks />
      </div>
    )
}
