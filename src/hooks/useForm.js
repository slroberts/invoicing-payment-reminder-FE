import { useState } from 'react';

const useForm = (initialValue = {}) => {
  const [values, setValues] = useState(initialValue);
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);

    setValues(() => initialValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (onSubmit) => {
    return (e) => {
      e.preventDefault();
      onSubmit(values);
      setOpen(!open);
    };
  };

  return {
    values,
    open,
    setOpen,
    toggleModal,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
