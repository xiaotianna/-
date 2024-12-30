# git常用命令

1. `git init` 初始化本地仓库
2. `git add .` 将所有文件添加到暂存区
3. `git commit -m "xxx"` 将暂存区的文件提交到本地仓库
4. `git remote add origin <仓库url>` 添加远程仓库
5. `git push -u origin master` 将本地仓库推送到远程仓库
6. `git clone <仓库url>` 将远程仓库克隆到本地
7. `git clone -b <分支名> <仓库url>` 克隆指定分支代码
8. `git pull` 将远程仓库更新到本地仓库
9. `git checkout <分支名>` 切换分支
10. `git branch` 查看分支
11. `git branch -a` 查看所有分支
12. `git branch <分支名>` 创建分支
13. `git branch -m <分支名>` 重命名分支
14. `git branch -d <分支名>` 删除分支
15. `git branch -D <分支名>` 强制删除分支

::: warning 注意

`-d` 选项只会删除那些已经与当前分支合并的分支。如果该分支尚未合并，Git 会阻止你删除它，并提示你使用 `-D` 选项强制删除。

:::

16. `git merge <分支名>` 合并分支
17. `git stash save "xxx"` 暂存文件（当远程分支与本地分支文件不同时，有文件发生变化）
18. `git stash list` 查看暂存文件
19. `git stash <pop | apply>` 恢复暂存文件

::: warning 注意

`pop` 与 `apply` 的区别在于：在恢复归档后，`pop` 会将存档删除，而 `apply` 则不会删除存档。

- `git stash <pop | apply>` 命令恢复第一个存档，等价于 `git stash <pop | apply> stash@{0}`
- `git stash <pop | apply> <stash_name>` 命令恢复指定存档名的存档。

:::

20. `git stash <drop | clear>` 删除暂存文件

::: warning 注意

- `git stash drop stash_name` 命令删除指定存档名的存档。
- `git stash clear` 命令删除当前工程的所有的存档。

:::