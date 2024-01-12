import Github from "next-auth/providers/github";

export const option = {
    secret:process.env.NEXTAUTH_SECERT as string,
    providers: [
        Github({
            profile(profile: any) {
                return {
                    id: profile.id,
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url,
                    auth: "github"
                }
            },
        
        
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? ''
        })
    ],
    callbacks:{
    
        async session({session, token}: {session: any, token: any}) {
            if(session?.user){
                // session.user.auth="github"
                console.log(session)

            }
            return session

        }
    }
}