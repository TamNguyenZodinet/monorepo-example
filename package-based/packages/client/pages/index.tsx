import { TextField } from '@/../ui-components';
import { Template } from '@/../ui-toolkit';

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 `}
        >
            <TextField
                label='Your name'
                placeholder='Nguyen Thanh Tam'
            ></TextField>
            <Template></Template>
        </main>
    );
}
