import React, { ReactChild } from 'react'

interface MailToProps {
    email: string;
    queries: any;
    className: string
    subject: string
    children?: ReactChild;
}

const _Mailto = ({
    email = '',
    queries = [''],
    className = '',
    subject = '',
    children,
}: MailToProps) => (
    <a
        href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(queries.map(b => b).join(''))}`}
        rel="noopener noreferrer"
        target="_blank"
        className={className}
    >{children}</a>
)

interface WrapperProps {
    type?: string;
    className?: string;
    children?: ReactChild;
}

const Mailto = ({
    type = 'contact',
    className = '',
    children,
}: WrapperProps) => {
    return (
        <_Mailto
            className={className}
            subject={type === 'contact' ? 'Contact AC Re' : 'AC Re employment application'}
            email={
                type === 'contact'
                ? 'info@ac-re.com.tw'
                : 'hr@ac-re.com.tw'
            }
            queries={
                type === 'contact'
                ? [
                    'Your name：\n',
                    'Company name：\n',
                    'Email address：\n',
                    'Phone number：\n',
                    'Subject：\n',
                    'Message：\n',
                ]
                : [
                    'Title (Mr., Miss, Ms., Mrs.)：\n',
                    'Name：\n',
                    'Phone：\n',
                    'Email：\n',
                    'Type of role you’d like to apply：\n',
                    'Cover Letter：attached or by link (public link only e.g., google drive, onedrive or LinkedIn profile)\n',
                    'CV：attached or by link (public link only e.g., google drive, onedrive or LinkedIn profile)\n',
                ]
            }
        >{children}</_Mailto>
    )
}

export default Mailto