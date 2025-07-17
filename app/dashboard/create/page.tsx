import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {handleSubmit} from "@/app/actions";
import {SubmitButton} from "@/components/general/Submitbutton";

export default function CreateBlogroute() {
    return (
        <div>
            <Card className={'max-w-lg mx-auto'}>
                <CardHeader>
                    <CardTitle>Create a Blog Article</CardTitle>
                    <CardDescription>Create A new Post</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className={'flex flex-col gap-4'} action={handleSubmit}>
                        <div className={'flex flex-col gap-2'}>
                            <Label>Title</Label>
                            <Input name={'title'} required={true} placeholder={'Enter Blog Title'} type={'text'}/>
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <Label>Content</Label>
                            <Textarea name={'content'} required placeholder={'Enter Blog Content'}/>
                        </div>
                        <div className={'flex flex-col gap-2'}>
                            <Label>Image Url</Label>
                            <Input name={'imageUrl'} required={true} placeholder={'Enter Blog Image'} type={'url'}/>
                        </div>
                        <SubmitButton/>
                    </form>
                </CardContent>
            </Card>
        </div>

    );
}