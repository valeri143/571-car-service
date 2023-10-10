export const animation = {
    hidden: {
      y: 300,
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  export const animationRight = {
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };
  
  export const animationButton = {
    hidden: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 1,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 1,
      },
    },
  };