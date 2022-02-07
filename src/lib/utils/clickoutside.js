export function clickOutside(node, cb ) {

    const handleOutsideClick = ({ target }) => {
      if (!node.contains(target)) {
        cb();
      }
    };

    window.addEventListener('click', handleOutsideClick);

    // function update({enabled}) {
    //   if (enabled) {
    //     window.addEventListener('click', handleOutsideClick);
    //   } else {
    //     window.removeEventListener('click', handleOutsideClick);
    //   }
    // }

    // update({ enabled: initialEnabled });

    return {
      destroy() {
        window.removeEventListener( 'click', handleOutsideClick );
      }
    };
  }