import React from 'react';
import { SnackbarProvider, useSnackbar, VariantType } from 'notistack';

export function useToast(autoHideDuration = 4000) {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    (type: VariantType, message: string, title?: string, action?: () => void) => {
      enqueueSnackbar('', {
        key: new Date().getTime() + Math.random(),
        autoHideDuration,
        variant: type,
        action: (key) => (
          <DamondSnack
            message={message}
            variant={type}
            title={title}
            onTitleClick={action}
            onClose={() => { closeSnackbar(key); }}
          />
        )
      });
    }
  );
}


function DamondSnack({message, variant, title = '', onTitleClick = () => {}, onClose = () => {}}) {
  return (
    <div className=''>
      <div className=''>
        <span className=''>
          {message ? message : ''}
        </span>
      </div>
      <div onClick={onTitleClick}>
        <span className=''>
          {title ? title : ''}
        </span>
      </div>
  </div>
  );
}
export function ToastProvider ({children}) {
  const isMobile = window.innerWidth <= 600;
  return (
    <SnackbarProvider
      maxSnack={5}
      anchorOrigin={{
        vertical: isMobile ? 'bottom' : 'bottom',
        horizontal: isMobile ? 'center' : 'right'
      }}
      dense={isMobile}
      preventDuplicate={true}
      hideIconVariant={true}
      classes={{
        containerAnchorOriginBottomCenter: '',
        variantSuccess: '',
        variantWarning: '',
        variantInfo: ''
      }}
    >
      {children}
    </SnackbarProvider>
  );
}

// how to use
// const toast = useToast(4000 ms default);
// toast('info', 'description', 'title', () => {alert('action'); });