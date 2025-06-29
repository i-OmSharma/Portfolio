import HeadingSVG from "./HeadingSVG";

export default function Heading({title}: {title: string}) {
    return (
        <div className="selection-heading select-none">
            <div className="flex items-center"> 
                <HeadingSVG />
                    <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em]">
                        {title}
                    </h1>
                <HeadingSVG />
            </div>
        </div>
    )
}