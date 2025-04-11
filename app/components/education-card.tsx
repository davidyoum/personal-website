export default function EducationCard({ school, degree, graduation }: { school: string, degree: string, graduation: string }) {
    return (
        <div>
          <div className="font-bold font-tinos text-lg">
            {school}
          </div>
          <div className="text-gray-600 text-md flex lg:flex-row flex-col justify-between">
            <div>
              {degree}
            </div>
            <div>
              {graduation}
            </div>
          </div>
        </div>
    )
}
