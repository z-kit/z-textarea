/**
 * Copyright (c) 2019 z-kit contributors.
 * @license MIT LICENSE
 * https://github.com/z-kit/z-textarea
 */

import styles from './style.css';

// Global to local style mappings, works even if using CSS modules
const classnames = {
  wrapper: styles['z-textarea'] || 'z-textarea',
  hasLabel: styles['z-textarea--label'] || 'z-textarea--label',
  hasSuccess: styles['z-textarea--success'] || 'z-textarea--success',
  hasWarning: styles['z-textarea--warning'] || 'z-textarea--warning',
  hasDanger: styles['z-textarea--danger'] || 'z-textarea--danger',
  hasError: styles['z-textarea--error'] || 'z-textarea--error',
  isDark: styles['z-textarea--dark'] || 'z-textarea--dark',
  label: styles['z-textarea__label'] || 'z-textarea__label',
};

export function ZTextarea(e) {
  return ({
    label,
    color,
    success,
    warning,
    danger,
    error,
    dark,
    ...props
  }) => {
    const textareaProps = props;
    if (color) {
      if (textareaProps.style) textareaProps.style.borderColor = color;
      else textareaProps.style = { borderColor: color };
    }
    const eTextarea = e('textarea', textareaProps);
    const labelProps = { className: classnames.label };
    if (textareaProps.id) labelProps.for = textareaProps.id;
    const eLabel = label ? e('label', labelProps, label) : null;
    const classes = [classnames.wrapper];
    if (label) classes.push(classnames.hasLabel);
    if (success) classes.push(classnames.hasSuccess);
    if (warning) classes.push(classnames.hasWarning);
    if (danger) classes.push(classnames.hasDanger);
    if (error) classes.push(classnames.hasError);
    if (dark) classes.push(classnames.isDark);
    const className = classes.join(' ');
    return e('div', { className }, [eTextarea, eLabel]);
  };
}

export default ZTextarea;
