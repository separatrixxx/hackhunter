import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import { forwardRef } from 'react';
import cn from 'classnames';


export const Htag = forwardRef<HTMLHeadingElement, HtagProps>(
	({ tag, children, className, onClick }: HtagProps, ref) => {
		switch (tag) {
			case 'xl':
				return <h1 ref={ref} className={cn(className, styles.xl)} onClick={onClick}>{children}</h1>;
			case 'l':
				return <h1 ref={ref} className={cn(className, styles.l)} onClick={onClick}>{children}</h1>;
			case 'm':
				return <h1 ref={ref} className={cn(className, styles.m)} onClick={onClick}>{children}</h1>;
			case 's':
				return <h1 ref={ref} className={cn(className, styles.s)} onClick={onClick}>{children}</h1>;
			case 'xs':
				return <h1 ref={ref} className={cn(className, styles.xs)} onClick={onClick}>{children}</h1>;
			case 'xxs':
				return <h1 ref={ref} className={cn(className, styles.xxs)} onClick={onClick}>{children}</h1>;
			default:
				return <></>;
		}
	}
);

Htag.displayName = 'Htag';
