export const scrollToForm = () => {
  const form = document.getElementById('form');
  setTimeout(() => {
    if (form) {
      if(window.innerWidth <= 768){
        form.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }
      else{
        window.location.href = '#form';
      }
        
    }
  }, 300); 
};