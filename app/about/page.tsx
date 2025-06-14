import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 프로필 섹션 */}
        <div>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 rounded-full overflow-hidden mb-6">
                  <Image
                    src="/profile.jpg"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <h2 className="text-2xl font-bold">이선유</h2>
                <p className="text-muted-foreground mt-2">한신대 소프트웨어융합학부</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 소개 섹션 */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">자기소개</h3>
              <p className="text-muted-foreground">
                안녕하세요! 저는 개발에는 큰 관심이 없지만, 새로운 도전을 위해 개발 블로그를 만들었습니다.
                익숙하지 않은 분야지만, 다양한 경험을 쌓고 싶어 시작하게 되었어요.
                앞으로 이 공간에서 저만의 시선으로 개발과 일상을 기록해보려 합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">기술 스택</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Next.js</Badge>
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>PostgreSQL</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 스킬 & 툴 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* 사용 가능한 툴 섹션 */}
        <Card className="transition-all hover:scale-[1.01] hover:shadow-lg duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">사용 가능한 툴</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-medium">디자인</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Photoshop
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Figma
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Canva
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium">개발</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    VS Code
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    GitHub Desktop
                  </li>
                  <li className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Chrome DevTools
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 경력 섹션 */}
        <Card className="transition-all hover:scale-[1.01] hover:shadow-lg duration-300">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">학력 및 활동</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 hover:border-blue-500 transition-colors">
                <h4 className="font-medium">한신대학교 소프트웨어융합학부</h4>
                <p className="text-sm text-muted-foreground">2021 - 현재</p>
                <p className="text-sm text-muted-foreground mt-1">
                  소프트웨어융합학부 재학중
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 hover:border-blue-500 transition-colors">
                <h4 className="font-medium">블로그 프로젝트</h4>
                <p className="text-sm text-muted-foreground">2024.06 - 현재</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Next.js를 활용한 개인 블로그 개발 중
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4 hover:border-blue-500 transition-colors">
                <h4 className="font-medium">웹 개발 스터디</h4>
                <p className="text-sm text-muted-foreground">2024.03 - 현재</p>
                <p className="text-sm text-muted-foreground mt-1">
                  기초적인 웹 개발 지식 학습
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* 연락처 섹션 */}
      <Card className="mt-8">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">연락처</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <span className="font-medium">Email:</span>
              <a href="seonyu0710@naver.com" className="text-blue-500 hover:underline">
                example@email.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">GitHub:</span>
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                @username
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium">Blog:</span>
              <a href="https://blog.example.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                blog.example.com
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}