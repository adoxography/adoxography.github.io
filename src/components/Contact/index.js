import React from 'react';
import Recaptcha from 'react-google-invisible-recaptcha';
import { Link } from 'react-router-dom';

import Input from './Input';
import Label from './Label';
import Textarea from './Textarea';
import Modal from './Modal';
import TopNav from '../TopNav';
import { sendEmail } from './email';

const handleFocus = e => {
  const parent = e.target.parentNode;
  parent.classList.toggle('opacity-75');
};

class Contact extends React.Component {
  state = {
    showModal: false,
    sending: false,
    emailParams: {}
  }

  closeModal = () => this.setState({ showModal: false });

  handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const emailParams = {
      name: formData.get('contact-name'),
      email: formData.get('contact-email'),
      message: formData.get('contact-message')
    };
    this.setState({ emailParams });

    this.recaptcha.execute();
  }

  sendEmail = () => {
    this.setState({ showModal: true, sending: true });

    sendEmail(this.state.emailParams)
      .then(() => this.setState({ sending: false }));
  }

  render() {
    const { showModal } = this.state;

    return (
      <div className="h-full w-full">
        <TopNav />

        <p className="mt-8 text-lg lg:text-xl px-8 md:px-16 lg:px-32 xl:px-48 text-tint-80">
          Hi there! Thanks for your interest in my work. Drop me a message and I'll get back to you as soon as I'm able.
        </p>

        <form onSubmit={this.handleSubmit} className="w-full flex flex-col mt-8 px-8 md:px-16 lg:px-32 xl:px-48">
          <div className="opacity-75 transition-all duration-300">
            <Label className="ml-1" htmlFor="contact-name">
              Name
            </Label>
            <Input
              id="contact-name"
              required
              onFocus={handleFocus}
              onBlur={handleFocus}
            />
          </div>

          <div className="opacity-75 mt-4 transition-all duration-300">
            <Label className="ml-1" htmlFor="contact-email">
              Email
            </Label>
            <Input
              id="contact-email"
              required
              type="email"
              onFocus={handleFocus}
              onBlur={handleFocus}
            />
          </div>

          <div className="opacity-75 mt-4 transition-all duration-300">
            <Label className="ml-1" htmlFor="contact-message">
              Message
            </Label>
            <Textarea
              id="contact-message"
              required
              className="h-24 md:h-40 lg:h-56"
              onFocus={handleFocus}
              onBlur={handleFocus}
            ></Textarea>
          </div>

          <div className="w-full flex justify-center">
            <button type="submit" className="mt-4 text-2xl uppercase font-thin text-tint-80 hover:text-white focus:outline-none hover:text-shadow-glow focus:text-shadow-glow transition-all duration-300">
              Send
            </button>
          </div>

          <Recaptcha
            ref={ref => this.recaptcha = ref}
            sitekey='6LdhpekUAAAAAGIPgjAiOtrr50Fe8fJtaWhwQLkb'
            onResolved={this.sendEmail}
            style={{ visibility: 'hidden' }}
          />

          <p class="italic text-sm opacity-50 mt-12">
            This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className="text-blue-300 hover:text-shadow-glow transform-all duration-150">Privacy Policy</a> and <a href="https://policies.google.com/terms" className="text-blue-300 hover:text-shadow-glow transform-all duration-150">Terms of Service</a> apply.
          </p>
        </form>

        <Modal show={showModal} onBlur={this.closeModal}>
          {
            this.state.sending
              ? (<p className="text-gray-900 text-2xl lg:text-3xl">Sending...</p>)
              : (
                <>
                  <p className="text-gray-900 text-xl lg:text-2xl">Thanks for reaching out!</p>
                  <p className="text-center mt-2">
                    <Link to="/" className="text-gray-900 underline lg:text-xl">Go back</Link>
                  </p>
                </>
              )
          }
        </Modal>
      </div>
    );
  }
}

export default Contact;
