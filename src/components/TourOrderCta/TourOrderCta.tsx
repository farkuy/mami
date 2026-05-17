'use client';

import { useState } from 'react';
import Button from '../ui/Button/Button';
import Modal from '../ui/Modal/Modal';
import OrderForm from '../OrderForm/OrderForm';

type Props = {
  tourName: string;
  className?: string;
};

export default function TourOrderCta({ tourName, className }: Props) {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <>
      <div className={className}>
        <Button
          type="button"
          variant="accent"
          size="lg"
          onClick={() => setOrderOpen(true)}
        >
          Заказать экскурсию
        </Button>
      </div>

      <Modal
        open={orderOpen}
        onClose={() => setOrderOpen(false)}
        title="Заявка на экскурсию"
        subtitle="Оставьте контакты - свяжусь с вами и согласуем дату"
      >
        <OrderForm tourName={tourName} autoFocusFirst />
      </Modal>
    </>
  );
}
