import React from 'react';

class RecipeImages extends React.Component {
  constructor(props) {
    super(props);
    this.handleFiles = this.handleFiles.bind(this);
    this.state = {
      image: null,
    }
  }

  handleFiles(e) {
    console.log(e.target.files);
    const file = e.target.files[0];
    if (!file.type.startsWith('image/')) {
      return;
    }
    const reader = new FileReader();
    let result;
    reader.onload = () => {
      result = reader.result;
      this.setState({ image: result });
    }
    reader.readAsDataURL(file);
  }


  render() {
    const { image } = this.state;
    return (
      <React.Fragment>
        <input
          type='file'
          name='images'
          onChange={this.handleFiles}
          style={{display: 'none'}}
          ref={fileInput => this.fileInput = fileInput}
        />
        <button onClick={() => this.fileInput.click()}>Upload Image</button>
        { image && <img height='200' src={image} />}
      </React.Fragment>
    )
  }
}

export default RecipeImages;
