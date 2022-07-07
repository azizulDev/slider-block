// SCSS file import
import "./index.scss";

// Registering a block
wp.blocks.registerBlockType("myplugins/slider-block-raju", {
    title: "Slider Block Raju",
    icon: "slides",
    attributes: {
      dummyName: {
        type: 'string', 
        default: 'Post Grid'
      },
      dummyAuthor: {
          type: 'string',
          default: 'author'
      },
      dummyVersion:{
          type: 'string',
          default: '2.1.20'
      }
    },
    category: "common",
    edit: function (props) {
      props.setAttributes({dummyName: 'Raju'});
      return (
        <div className="my-custom-block">
            <h1>Hello from Gutenberg Editor!!!</h1>
        </div>
      )
    },
    save: function (props) {
        return <h1>Hello from front end!</h1>
    }
})
  
