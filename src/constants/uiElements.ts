// src/constants/uiElements.ts
interface UIElements {
  BUTTONS: {
    [key: string]: string;
  };
  TITLES: {
    [key: string]: string;
  };
  LABELS: {
    [key: string]: string;
  };
}

export const USER_UI_ELEMENTS: UIElements = {
  BUTTONS: {
    SUBMIT: 'Submit',
    CANCEL: 'Cancel',
    DELETE: 'Delete',
  },
  TITLES: {
    MAIN_TITLE: 'User Management',
    SUB_TITLE: 'Edit User',
  },
  LABELS: {
    USERNAME: 'Username',
    PASSWORD: 'Password',
  },
} as const;

export const POST_UI_ELEMENTS: UIElements = {
  BUTTONS: {
    SUBMIT: 'Submit',
    CANCEL: 'Cancel',
    DELETE: 'Delete',
  },
  TITLES: {
    MAIN_TITLE: 'Post Management',
    SUB_TITLE: 'Edit Post',
  },
  LABELS: {
    TITLE: 'Title',
    CONTENT: 'Content',
  },
} as const;

// Add more UI elements for other pages as needed
