'use client';

import { useState } from 'react';
import ContactForm from './ContactForm';
import SuccessModal from './SuccessModal';

export default function ContactFormWithModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ContactForm onSubmitSuccess={() => setModalOpen(true)} />
      <SuccessModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}