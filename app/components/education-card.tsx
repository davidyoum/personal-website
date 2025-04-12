export default function EducationCard({ school, degree, graduation }: { school: string, degree: string, graduation: string }) {
    return (
        <div>
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="font-tinos text-lg">
              {school}
            </div>
            <div>
              {graduation}
            </div>
          </div>
            <div className="text-gray-600 text-md">
              {degree}
            </div>
        </div>
    )
}
