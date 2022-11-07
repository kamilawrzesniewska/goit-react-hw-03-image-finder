import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Component } from 'react';
import { fetchImages } from './Api/Api';

const INITIAL_STATE = {
  images: [],
  search: '',
  error: null,
  isModalOpen: false,
  isLoading: false,
  largeImage: '',
  page: 1,
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.input.value;
    this.setState({ images: [], search: input, page: 1 });
    form.reset();
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.search !== this.state.search
    ) {
      this.setState({ isLoading: true });
      try {
        const fetch = await fetchImages(this.state.search, this.state.page, 12);
        this.setState(({ images }) => ({ images: [...images, ...fetch.hits] }));
        document.addEventListener('keyup', e => {
          if (e.key === 'Escape') {
            this.closeModal();
          }
        });
      } catch (error) {
        console.log(error.message);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  async componentDidMount() {
    this.setState({ images: [], page: 1 });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', e => {});
  }

  handleImageClick = e => {
    this.setState({
      modalOpen: true,
      modalAlt: e.target.alt,
      modalImg: e.target.name,
    });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  loadMoreClick = () => {
    this.setState({ isLoading: true });
    try {
      this.setState(({ page }) => ({ page: page + 1 }));
    } catch (error) {
      console.log(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, largeImage, isModalOpen, isLoading, page } = this.state;
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: '20px',
          paddingBottom: '30px',
        }}
      >
        {isModalOpen ? (
          <Modal clickImage={largeImage} handleClose={this.closeModal} />
        ) : null}
        <Searchbar handleSubmit={this.handleSubmit} />
        {isLoading & (page <= 1) ? <Loader /> : null}
        <ImageGallery>
          <ImageGalleryItem
            images={images}
            onClick={this.handleImageClick}
            loading={isLoading}
          />
        </ImageGallery>
        {isLoading & (page >= 2) ? <Loader /> : null}

        {images.length === 0 ? null : (
          <Button handleClick={this.loadMoreClick} />
        )}
      </div>
    );
  }
}

