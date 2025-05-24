import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const getTeams = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const teams = await prisma.team.findMany()
        const teamsWithUsernames = await Promise.all(
            teams.map(async (team: any) => {
                const ProductOwner = await prisma.user.findUnique({
                    where: { id: team.productOwnerUserId },
                    select: { username: true },
                });

                const ProjectManager = await prisma.user.findUnique({
                    where: { id: team.projectManagerUserId },
                    select: { username: true },
                });

                return {
                    ...team,
                    ProductOwnerUsername: ProductOwner?.username,
                    ProjectManagerUsername: ProjectManager?.username
                }
            })
        )



        res.json(teams)
    } catch (err: any) {
        res.status(500).json({ message: `Error retrieving teams: $${err.message}` })
    }
}