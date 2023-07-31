import React from 'react';

type TableProps = {
    headers: string[];
    children: React.ReactNode;
}

export default function Table(props: TableProps)
    : React.ReactElement {
    let headerElements = props.headers.map((header, id) => <th key={id}>{header}</th>);
    return (
        <table>
            <thead>
                <tr>
                    {headerElements}
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}