export const metadata = {
    title: 'show article',
}

export default function article(props) {
    console.log(props.params.id);
    return (
        <div>
            <h3>This is show Article is {props.params.id}</h3>
        </div>
    );
}