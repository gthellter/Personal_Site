import experiences from "../../public/experience.json";
import Image from "next/image";

export default function Experience() {
  function splitStrong(stringToSplit: String) {
    const splitWord: string[] = stringToSplit.split(/<\/?strong>/gm);
    return splitWord.reduce(
      (
        prev: JSX.Element | string,
        curr: JSX.Element | string,
        currIndex: number
      ) => {
        if (currIndex % 2 !== 0) {
          return (
            <>
              {prev}
              <strong>{curr}</strong>
            </>
          );
        } else {
          return (
            <>
              {prev} {curr}
            </>
          );
        }
      },
      <></>
    );
  }
  return (
    <div className="flex flex-col self-center">
      {experiences.map((experience, index) => (
        <div
          className="transition ease-in-out p-6 bg-gray-50 rounded-lg w-120 text-black self-center hover:bg-LightBackgroundBlue hover:opacity-70 hover:text-black-500 hover:scale-110 bg-opacity-60 mb-5 relative"
          key={index}
        >
          <Image
            src={`/experience-icons/${experience?.images?.[0]?.path}`}
            width={experience?.images?.[0]?.size?.[0] || 100}
            height={experience?.images?.[0]?.size?.[1] || 100}
            alt="Experience Image 1"
            className="absolute hidden md:block"
          />
          <Image
            src={`/experience-icons/${experience?.images?.[1]?.path}`}
            width={experience?.images?.[1]?.size?.[0] || 100}
            height={experience?.images?.[1]?.size?.[1] || 100}
            alt="Experience Image 1"
            className="absolute right-0 hidden md:block"
          />
          <p className="text-center">{experience.company}</p>
          <p className="text-center">
            <strong>{experience.title}</strong>
          </p>
          <div className="text-center content-fit mb-5">
            {experience.description.map((content) => (
              <p key={content}>{content}</p>
            ))}
          </div>
          {experience.list.map((content) => {
            return (
              <div className="mb-5" key={content}>
                -&gt; {splitStrong(content)}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
