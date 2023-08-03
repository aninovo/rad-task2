import React from 'react';

type TableProps = {
    headers: string[];
    children: React.ReactNode;
}

export default function Table(props: TableProps)
    : React.ReactElement {
    let headerElements = props.headers.map((header, id) => <th key={id}>{header}</th>);
    return (
        <table className="w-full table-fixed">
            <thead>
                <tr className="bg-slate-600">
                    {headerElements}
                </tr>
            </thead>
            <tbody>
                {props.children}
            </tbody>
        </table>
    )
}