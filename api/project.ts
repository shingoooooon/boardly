import { VercelRequest, VercelResponse } from '@vercel/node'
import prisma from '../lib/prisma'

export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // CORS設定
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

    // OPTIONSリクエストの処理
    if (req.method === 'OPTIONS') {
        return res.status(200).end()
    }

    try {
        if (req.method === 'GET') {
            // GET /api/projects - 全プロジェクト取得
            const projects = await prisma.project.findMany()
            return res.status(200).json(projects)
        }

        else if (req.method === 'POST') {
            // POST /api/projects - 新しいプロジェクト作成
            const { name, description, startDate, endDate } = req.body

            if (!name) {
                return res.status(400).json({ message: 'Name is required' })
            }

            const newProject = await prisma.project.create({
                data: {
                    name,
                    description,
                    startDate: startDate ? new Date(startDate) : null,
                    endDate: endDate ? new Date(endDate) : null
                }
            })

            return res.status(201).json(newProject)
        }

        else {
            // サポートされていないHTTPメソッド
            res.setHeader('Allow', ['GET', 'POST'])
            return res.status(405).json({ message: `Method ${req.method} Not Allowed` })
        }

    } catch (error: any) {
        console.error('API Error:', error)
        return res.status(500).json({
            message: `Server error: ${error.message}`
        })
    }
}